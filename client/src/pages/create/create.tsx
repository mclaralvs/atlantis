import { Tab, Tabs } from "react-bootstrap";
import Navigation from "../../components/navbar/navbar";
import CreateClienteDependente from "./createClienteDependente";
import CreateClienteTitular from "./createClienteTitular";

export default function Create() {
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
                        <CreateClienteTitular/>
                    </Tab>

                    <Tab eventKey="dependente" title="Clientes Dependentes" className="tab2">
                        <CreateClienteDependente />
                    </Tab>

                </Tabs>

            </div>

        </>
    )
}