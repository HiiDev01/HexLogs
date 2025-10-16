import React, { createContext, useContext, useState, useEffect, Children } from 'react'
import { supabase } from '../pages/Client'

const AuthContext = createContext()


export const AuthProvider = ({children}) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    supabase.auth.getSession()
    .then(({data: {session}})=>{
      setSession(session)
      setLoading(false)
    })

    const {data: listener} = supabase.auth.onAuthStateChange((_event, session) =>{
      setSession(session)
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const value = {session,user: session?.user, loading, }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  
}

export const useAuth = () => useContext(AuthContext);
