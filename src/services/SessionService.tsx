import { supabase } from './SupaBase';

const SessionService = {
    async getUserID(){
        const { data, error } = await supabase.auth.getUser();

        if(error){
            return false;
        }

        return data.user.id;
    }
}

export default SessionService;