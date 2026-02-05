import { DialogContent, DialogHeader, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { AppointmentWithService } from "./appointments-list";

interface DialogAppointmentProps{
    appointment: AppointmentWithService | null
}

export function DialogAppointment({ appointment }: DialogAppointmentProps){
   
    return(
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Detalhes do Agendamento                    
                </DialogTitle>
                <DialogDescription>
                    Veja todos os detalhes do agendamento
                </DialogDescription>
            </DialogHeader>

            <div className="py-4">
                {appointment && (
                    <article>
                        <p><span className="font-semibold">Nome:</span> {appointment.name}</p>
                        <p><span className="font-semibold">Telefone:</span> {appointment.phone}</p>
                        <p><span className="font-semibold">Email:</span> {appointment.email}</p>
                        <p><span className="font-semibold">Serviço:</span> {appointment.service.name}</p>
                        <p><span className="font-semibold">Horário Agendado:</span> {appointment.time}</p>
                    </article>
                )}
            </div>
        </DialogContent>
    )
}