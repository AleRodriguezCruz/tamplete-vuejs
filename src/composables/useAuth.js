import { ref, computed, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient'

// Estado global reactivo
const usuarioActual = ref(null)

export function useAuth() {
  
  // Función para actualizar el estado del usuario
  const actualizarUsuario = (user) => {
    if (user) {
      usuarioActual.value = {
        name: user.email.split('@')[0], // Toma "admin" de "admin@vue.com"
        email: user.email
      }
    } else {
      usuarioActual.value = null
    }
  }

  // Escuchar cambios de sesión (Login/Logout)
  supabase.auth.onAuthStateChange((event, session) => {
    actualizarUsuario(session?.user || null)
  })

  // Verificar sesión inicial
  onMounted(async () => {
    const { data } = await supabase.auth.getSession()
    actualizarUsuario(data.session?.user || null)
  })

  const isAuthenticated = computed(() => !!usuarioActual.value)
  const user = computed(() => usuarioActual.value)

  async function logout() {
    await supabase.auth.signOut()
    usuarioActual.value = null
  }

  return {
    isAuthenticated,
    user,
    logout
  }
}