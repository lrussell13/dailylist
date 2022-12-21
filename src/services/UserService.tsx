import { supabase } from './SupaBase';

const UserService = {
    async signInWithEmail(email, password){
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) return error;
        return data;
    },
    async signUpWithEmail(email, password, name){
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    name: name
                }
            }
        });

        if (error) return error;
        return data;
    },
    async signOut() {
        const { error } = await supabase.auth.signOut()
        
        if (error) return error;
        return true;
    }
}

export default UserService;