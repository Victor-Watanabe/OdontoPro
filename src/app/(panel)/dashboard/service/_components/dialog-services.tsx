"use cliente"

import { DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useDialogServiceForm, DialogServiceFormData } from "./dialog-service-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage
 } from "@/components/ui/form"
 import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { convertRealtoCents } from "@/utils/convertCurrency"

export function DialogService(){
    
    const form = useDialogServiceForm()

    async function onSubmit(values : DialogServiceFormData){
        const priceInCents = convertRealtoCents(values.price)
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

                        <Button type="submit" className="w-full font-semibold text-white hover:bg-emerald-500">
                            Adicionar Serviço
                        </Button>
                </form>

            </Form>
        </>
    )
}