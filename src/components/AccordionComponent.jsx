import AccordionItemComponent from "./Accordion/AccordionItemComponent.jsx";
const AccordionComponent = () =>{
    return (
        <div className="container">
            <h3 className="uppercase text-white text-2xl text-center font-bold font-clash">Preguntas frecuentes</h3>
            <div className="flex flex-col gap-3">

                <AccordionItemComponent/>
                <AccordionItemComponent/>
                <AccordionItemComponent/>

            </div>

        </div>
    )
}
export default AccordionComponent;