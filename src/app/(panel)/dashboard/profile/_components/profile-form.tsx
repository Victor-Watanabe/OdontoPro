import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { string, z } from "zod"

interface UseProfileFormProps{
    name: string | null;
    addres: string | null;
    phone: string | null;
    status: boolean;
    timeZone: string | null;
}

const profileSchema = z.object({
    name: z.string().min(1, {message: "O nome é obrigatório"}),
    address: z.string().optional(),
    phone: z.string().optional(),
    status: z.string(),
    timeZone: z.string(). min(1, {message: "O time zone é Obrigatório"})
})

export type ProfileFormData = z.infer<typeof profileSchema>;

export function useProfileForm({name, addres, phone, status, timeZone}: UseProfileFormProps){
    return useForm<ProfileFormData>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            name: name || "",
            address: addres || "",
            phone: phone || "",
            status: status ? "activeo" : "inactive",
            timeZone: timeZone || ""
        }
    })
}