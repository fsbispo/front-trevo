import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "../ui/dialog"
import { ReactNode } from "react"
import colors from "../../styles/styles"
import login from "../../assets/login.png"
import loginMobile from "../../assets/login-mobile.png"
import HeaderDialog from "./HeaderDialog"

interface BaseAuthDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    trigger?: ReactNode;
    children: ReactNode;
}

export default function BaseAuthDialog({ 
    open, 
    onOpenChange, 
    trigger, 
    children 
}: BaseAuthDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            {trigger && (
                <DialogTrigger asChild>
                    {trigger}
                </DialogTrigger>
            )}

            <DialogContent 
                showCloseButton={false}
                className="
                    max-w-none w-full h-full sm:w-[700px] sm:h-[600px] xl:w-[700px] xl:h-[600px]
                    p-0 overflow-hidden sm:rounded-2xl
                "
                style={{
                    borderColor: colors.border.slateBlue,
                    backgroundColor: colors.background.primary
                }}
            >
                <div className="flex flex-col sm:flex-row w-full h-full">
                    <div
                        className="hidden sm:block sm:w-[44.28%] sm:h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${login})`
                        }}
                    />

                    <div className="w-full sm:w-[55.72%] text-white flex flex-col px-4 py-4 sm:px-8 sm:py-8 overflow-y-auto h-full ">
                        <HeaderDialog onClose={() => onOpenChange(false)} />
                        
                        <div
                            className="w-full aspect-video sm:hidden bg-contain bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url(${loginMobile})`
                            }}
                        />

                        {children}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
