import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Navigation from "../../components/navbar/navbar";
import ReadClienteDependente from "./readClienteDependente";
import ReadClienteTitular from "./readClienteTitular";

export default function Read() {
    return (
        <>
            <Navigation />

            <div className="container-visualizacao">

                <Tabs
                    defaultActiveKey="titular"
                    id="fill-tab-example"
                    className="mb-3"
                >

                    <Tab eventKey="titular" title="Clientes Titulares" className="tab1">
                        <ReadClienteTitular/>
                    </Tab>

                    <Tab eventKey="dependente" title="Clientes Dependentes" className="tab2">
                        <ReadClienteDependente />
                    </Tab>

                </Tabs>

            </div>

        </>
    )
}