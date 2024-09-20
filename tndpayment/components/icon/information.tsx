import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function Information(props: any) {
    return (
        <Popover>
            <PopoverTrigger className="ml-3">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 0C8.0748 0 0 8.0748 0 18C0 27.9252 8.0748 36 18 36C27.9252 36 36 27.9252 36 18C36 8.0748 27.9252 0 18 0ZM18 7.38C18.4628 7.38 18.9152 7.51724 19.3 7.77436C19.6848 8.03148 19.9848 8.39694 20.1619 8.82452C20.339 9.2521 20.3853 9.7226 20.295 10.1765C20.2047 10.6304 19.9819 11.0474 19.6546 11.3746C19.3274 11.7019 18.9104 11.9247 18.4565 12.015C18.0026 12.1053 17.5321 12.059 17.1045 11.8819C16.6769 11.7048 16.3115 11.4048 16.0544 11.02C15.7972 10.6352 15.66 10.1828 15.66 9.72C15.66 9.09939 15.9065 8.5042 16.3454 8.06537C16.7842 7.62653 17.3794 7.38 18 7.38ZM23.76 27.22C23.76 27.4961 23.5361 27.72 23.26 27.72H13.46C13.1839 27.72 12.96 27.4961 12.96 27.22V25.34C12.96 25.0639 13.1839 24.84 13.46 24.84H16.92V16.92H14.54C14.2639 16.92 14.04 16.6961 14.04 16.42V14.54C14.04 14.2639 14.2639 14.04 14.54 14.04H19.3C19.5761 14.04 19.8 14.2639 19.8 14.54V24.84H23.26C23.5361 24.84 23.76 25.0639 23.76 25.34V27.22Z" fill="#F4BBFF" />
                </svg>
            </PopoverTrigger>
            <PopoverContent className="max-w-xs whitespace-normal bg-grey font-sans p-4 border-2 border-yellow shadow-inner-medium rounded-[8px]">
                <h1 className="font-bold text-xl mb-2 text-blue">Reference Code</h1>
                <p className="font-normal text-lg tracking-normal mb-2 leading-tight text-blue">This element provides a unique identifier for the unit being described. The identifier may consist of three subelements: a local identifier, a code for the repository, and a code for the country.</p>
                <a href="#" target="_blank" className="whitespace-nowrap text-lg">Learn More</a>
            </PopoverContent>
        </Popover>
    )
}