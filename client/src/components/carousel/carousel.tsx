import Carousel from 'react-bootstrap/Carousel';

// importing images ✨
const CasalSimples = require("../../assets/img/CasalSimples.png")
const FamiliaSimples = require("../../assets/img/FamiliaSimples.png")
const FamiliaMais = require("../../assets/img/FamiliaMais.png")
const FamiliaSuper = require("../../assets/img/FamiliaSuper.png")
const SolteiroSimples = require("../../assets/img/SolteiroSimples.png")
const SolteiroMais = require("../../assets/img/SolteiroMais.png")

function Carrossel() {
    return (
        <Carousel>
            
            <Carousel.Item>
                
                <img
                    className="d-block w-100"
                    src={CasalSimples}
                    alt="First slide"
                />
                
                <Carousel.Caption>
                    
                    <h3>Acomodação simples para casal</h3>
                    
                    <p>
                        Conta com uma cama de casal, com climatização, uma garagem e uma suíte.
                    </p>
                    
                    <p className='pic-credit'><a href="https://br.freepik.com/fotos-gratis/suite-de-luxo-em-hotel-resort-alto-com-mesa-de-trabalho_10332581.htm#query=quarto%20de%20hotel%20tropical&position=2&from_view=search&track=sph">Imagem de dit26978</a> no Freepik</p>

                </Carousel.Caption>

            </Carousel.Item>

            <Carousel.Item>
                
                <img
                    className="d-block w-100"
                    src={FamiliaSimples}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    
                    <h3>Acomodação para família com até duas crianças</h3>
                    
                    <p>
                        Conta com duas camas de solteiro, uma cama de casal, com climatização, uma garagem e uma suíte.
                    </p>
                    
                    <p className='pic-credit'><a href="https://www.freepik.com/free-photo/small-hotel-bedroom-with-white-walls-panoramic-window_2448970.htm#query=hotel%20room&position=10&from_view=search&track=sph">Image by katemangostar</a> on Freepik</p>

                </Carousel.Caption>

            </Carousel.Item>
            
            <Carousel.Item>
                
                <img
                    className="d-block w-100"
                    src={FamiliaMais}
                    alt="Third slide"
                />

                <Carousel.Caption>

                    <h3>Acomodação para família com até cinco crianças</h3>
                    
                    <p>
                        Conta com cinco camas de solteiro, uma cama de casal, com climatização, duas garagens e duas suítes.
                    </p>

                    <p className='pic-credit'><a href="https://www.freepik.com/free-photo/elegant-hotel-room-with-window_968437.htm#query=hotel%20room&position=33&from_view=search&track=sph">Image by mrsiraphol</a> on Freepik</p>

                </Carousel.Caption>

            </Carousel.Item>

            <Carousel.Item>

                <img
                    className="d-block w-100"
                    src={FamiliaSuper}
                    alt="Third slide"
                />

                <Carousel.Caption>
                
                    <h3>Acomodação para até duas familias, casal e três crianças cada</h3>
                    
                    <p>
                        Conta com seis camas de solteiro, duas camas de casal, com climatização, duas garagens e três suítes.
                    </p>

                    <p className='pic-credit'><a href="https://br.freepik.com/fotos-gratis/suite-de-luxo-com-renderizacao-em-3d-em-hotel-resort-com-cama-de-solteiro-e-sala-de-estar_18320830.htm#query=quarto%20de%20hotel%20tropical&position=14&from_view=search&track=sph">Imagem de dit26978</a> no Freepik</p>

                </Carousel.Caption>

            </Carousel.Item>
            
            <Carousel.Item>
                
                <img
                    className="d-block w-100"
                    src={SolteiroSimples}
                    alt="Third slide"
                />

                <Carousel.Caption>

                    <h3>Acomodação simples para solteiro(a)</h3>
                    
                    <p>
                        Conta com uma cama de solteiro, com climatização e uma suíte.
                    </p>
                    
                    <p className='pic-credit'><a href="https://br.freepik.com/fotos-gratis/design-moderno-apartamento-com-quarto-e-sala-de-estar_2448708.htm#query=quarto%20de%20hotel&position=12&from_view=search&track=sph">Imagem de katemangostar</a> no Freepik</p>

                </Carousel.Caption>

            </Carousel.Item>
            
            <Carousel.Item>
                
                <img
                    className="d-block w-100"
                    src={SolteiroMais}
                    alt="Third slide"
                />

                <Carousel.Caption>
                
                    <h3>Acomodação com garagem para solteiro(a)</h3>
                    
                    <p>
                        Conta com uma cama de casal, com climatização, uma garagem e uma suíte.
                    </p>
                    
                    <p className='pic-credit'><a href="https://www.freepik.com/free-photo/bedroom-interior_5401291.htm#query=bedroom&position=0&from_view=search&track=sph">Image by pressfoto</a> on Freepik</p>

                </Carousel.Caption>

            </Carousel.Item>

        </Carousel>
    );
}

export default Carrossel;