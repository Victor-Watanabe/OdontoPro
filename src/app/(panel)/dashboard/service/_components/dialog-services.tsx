"use cliente"

import { DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useDialogServiceForm, DialogServiceFormData } from "./dialog-service-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage
 } from "@/components/ui/form"
 import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { convertRealtoCents } from "@/utils/convertCurrency"
import { createNewService } from "../_actions/create-service"
import { toast } from "sonner"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { string } from "zod"
import { updateService } from "../_actions/update-service"

interface DiaLogServiceProps{
    closeModal : () => void;
    serviceId? : string;
    initialValues? : {
        name: string;
        price: string;
        hours: string;
        minutes: string;
    }
}

export function DialogService({closeModal, initialValues, serviceId} : DiaLogServiceProps){
    
    const form = useDialogServiceForm({ initialValues : initialValues })
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function onSubmit(values : DialogServiceFormData){
        setLoading(true)
        const priceInCents = convertRealtoCents(values.price)
        const hours = parseInt(values.hours) || 0;
        const minutes = parseInt(values.minutes) || 0;

        // converter horas e minutos em total de minutos.
        const duration = (hours*60) + minutes;

        if(serviceId){
            await editiServiceById({
                serviceId: serviceId,
                name: values.name,
                priceInCents: priceInCents,
                duration: duration
            })
            
            return;
        }

        const response = await createNewService({
            name: values.name,
            price: priceInCents,
            duration: duration
        })

        setLoading(false);


        if(response.error){
            toast.error(response.error)
            return;
        }
        toast.success("Serviço Cadastrado com Sucesso!")
        handleCloseModal();
        router.refresh();
    }

    async function editiServiceById({ serviceId, name, priceInCents, duration } : 
        { serviceId: string, name: string, priceInCents: number, duration: number } ){
            const response = await updateService({
                serviceId: serviceId,
                name: name,
                price: priceInCents,
                duration: duration
            })

            setLoading(false);

            if(response.error){
                toast(response.error)
                return;
            }

            toast((response).data)
            handleCloseModal();
            }
    
    function handleCloseModal(){
        form.reset();
        closeModal();
    }

    function changeCurrency(event : React.ChangeEvent<HTMLInputElement>){
        let { value } = event.target
        value = value.replace(/\D/g, "");
        
        if(value){
            value = (parseInt(value, 10) / 100).toFixed(2);
            value = value.replace('.',",")
            value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }

        event.target.value = value
        form.setValue("price", value)
    }

    
    return(
        <>
            <DialogHeader>
                <DialogTitle>Novo Serviços</DialogTitle>
                <DialogDescription>
                    Adicione um Novo Serviços
                </DialogDescription>
            </DialogHeader>

            <Form {...form}>
                <form className="space-y-2"
                onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem className="my-2">
                                <FormLabel className="font-semibold">
                                    Nome do Serviço:
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Digite o nome do Serviços..."/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}>

                        </FormField>

                         <FormField
                        control={form.control}
                        name="price"
                        render={({field}) => (
                            <FormItem className="my-2">
                                <FormLabel className="font-semibold">
                                    Valor do Serviço:
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Ex: 120,00"
                                    onChange={changeCurrency}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}>

                        </FormField>
                        
                        </div>
                        
                        <p className="font-semibold">Tempo de Duração do Serviço</p>

                        <div className="grid grid-cols-2 gap-3">
                            <FormField
                            control={form.control}
                            name="hours"
                            render={({field}) => (
                                <FormItem className="my-2">
                                    <FormLabel className="font-semibold">
                                       Horas:
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Ex: 1"
                                        min="0"
                                        type="number"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>

                            )}>

                            </FormField>

                            <FormField
                            control={form.control}
                            name="minutes"
                            render={({field}) => (
                                <FormItem className="my-2">
                                    <FormLabel className="font-semibold">
                                        Minutos:
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Ex: 30"
                                        min="0"
                                        type="number"/>
                                    </FormControl> 
                                    <FormMessage/>
                                </FormItem>
                            )}>

                            </FormField>
                        </div>

                        <Button type="submit" 
                        className="w-full font-semibold text-white hover:bg-emerald-500"
                        disabled={loading}>
                            { loading ? "Carregando..." : `${ serviceId ? "Atualizar Serviço" : "Cadastrar Serviço"}`}
                        </Button>
                </form>

            </Form>
        </>
    )
}