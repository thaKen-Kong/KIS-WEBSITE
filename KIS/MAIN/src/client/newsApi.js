import { supabase } from "./supabase-client";


export async function getNews() {
    const {data, error} = await supabase.from("news").select("*")
    return data
}


export async function getIndividualNews(slug) {
    const {data, error} = await supabase.from("news").select("*").eq("slug", slug).single()
    return data
}

export async function getEvents() {
    const {data, error} = await supabase.from("events").select("")
    return data
}