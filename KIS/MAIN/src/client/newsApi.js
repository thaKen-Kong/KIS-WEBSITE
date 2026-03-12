import { supabase } from "./supabase-client";


export async function getNews() {
    const {data, error} = await supabase.from("news").select("*")
    if (error) console.log(error)
    return data
}