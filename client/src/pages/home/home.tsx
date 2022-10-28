import CardLink from "../../components/card/card"
import Carrossel from "../../components/carousel/carousel"
import Navigation from "../../components/navbar/navbar"

// importing css ✨
import './style.css'

// importing images ✨
const CasalSimples = require("../../assets/img/CasalSimples.png")
const FamiliaSimples = require("../../assets/img/FamiliaSimples.png")
const FamiliaMais = require("../../assets/img/FamiliaMais.png")
const FamiliaSuper = require("../../assets/img/FamiliaSuper.png")
const SolteiroSimples = require("../../assets/img/SolteiroSimples.png")
const SolteiroMais = require("../../assets/img/SolteiroMais.png")

export default function Home() {
    return (
        <>
            <Navigation />

            <Carrossel />

            <div className="container-home">

                <div id="chamada">

                    <h1>Bem-Vindos ao Atlantis!</h1>

                </div>

                <div className="acomodacoes-collection">
                    <h2>Reservar acomodação para o cliente:</h2>

                    <div className="acomodacoes-collection-cards">

                        <CardLink
                            img={CasalSimples}
                            title="Casal Simples"
                            desc="Acomodação simples para casal"
                            camaSolt="1"
                            camaCasal="0"
                            suite="1"
                            garagem="0"
                            clima="Sim"
                        />

                        <CardLink
                            img={FamiliaSimples}
                            title="Familia Simples"
                            desc="Acomodação para família com até duas crianças"
                            camaSolt="2"
                            camaCasal="1"
                            suite="1"
                            garagem="1"
                            clima="Sim"
                        />

                        <CardLink
                            img={FamiliaMais}
                            title="Familia Mais"
                            desc="Acomodação para família com até cinco crianças"
                            camaSolt="5"
                            camaCasal="1"
                            suite="2"
                            garagem="2"
                            clima="Sim"
                        />

                        <CardLink
                            img={FamiliaSuper}
                            title="Familia Super"
                            desc="Acomodação para até duas familias e três crianças cada"
                            camaSolt="5"
                            camaCasal="1"
                            suite="2"
                            garagem="2"
                            clima="Sim"
                        />

                        <CardLink
                            img={SolteiroSimples}
                            title="Solteiro Simples"
                            desc="Acomodação simples para solteiro(a)"
                            camaSolt="1"
                            camaCasal="0"
                            suite="1"
                            garagem="0"
                            clima="Sim"
                        />

                        <CardLink
                            img={SolteiroMais}
                            title="Solteiro Mais"
                            desc="Acomodação com garagem para solteiro(a)"
                            camaSolt="0"
                            camaCasal="1"
                            suite="1"
                            garagem="1"
                            clima="Sim"
                        />

                    </div>

                </div>

            </div>

        </>
    )
}