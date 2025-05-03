import { Typography } from "../../design-system/Typography/Typography"
import { Container } from "../Container/Container"
import { footerApplicatioLinks } from "./app-links";

export const Footer =()=>{

    const currentYear =new Date().getFullYear();
    const footerNavigationList = footerApplicatioLinks.map((element) => {
        <div>{element.label}</div>
    })
      
  
    return(
        <div className="bg-gray py-40">
           <Container className="flex justify-between pt-16">
            <div className="flex flex-col items-center gap-1">
                <Typography variant="caption1" theme="white" weight="medium">
                    Formation
                </Typography>
                <Typography variant="caption3" theme="gray">
                    text
                </Typography>
            </div>
            <div className="">
                List de liens
            </div>
            </Container > 
            <Container className="pt-9 pb-11 space-y-11">
                <hr className="text-gray-800"></hr>
                <div className="felx item-center justify-between">
                    <Typography variant="caption4" theme="gray">
                        {`© Copyright ${currentYear} | Propulsed by `}<a href="" target="_blank" className="underline">{` Soikhat`}</a>
                    </Typography>
                    <div className=""></div>
                    
                </div>
            </Container>
        </div>
    )
}