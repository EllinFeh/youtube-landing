import React from 'react'
import './Styled.css'

const Menu = () => {
    return (
        <>
        <div className='container'>

            <div className="main-content">
                <div className='itens home'>
                    <svg style={{marginTop:"20px"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 22V12H15V22" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> <p className='txt' style={{fontWeight:"700", marginTop:"20px"}}>Início</p>
                </div>
                <div className="itens explorar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.24 7.76001L14.12 14.12L7.76001 16.24L9.88001 9.88001L16.24 7.76001Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> <p className='txt'>Explorar</p>
                </div>
                <div className="itens inscritos">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12002 4 3.40002 4.46C2.92927 4.59318 2.502 4.84824 2.16137 5.19941C1.82074 5.55057 1.57881 5.98541 1.46002 6.46C1.14524 8.20556 0.991258 9.97631 1.00002 11.75C0.988802 13.537 1.14279 15.3213 1.46002 17.08C1.59098 17.5398 1.83833 17.9581 2.17817 18.2945C2.518 18.6308 2.93884 18.8738 3.40002 19C5.12002 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8573 8.1787 22.54 6.42V6.42Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> <p className='txt'>Inscrições</p>
                </div>
                <div className="itens yt-musica">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> <p className='txt'>Youtube Music</p>
                </div>
                <div className="itens likes">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> <p className='txt'>Vídeos que gostei</p>
                </div>
                <div className="itens assistir-depois">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 6V12L16 14" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> <p className='txt'>Assistir mais tarde</p>
                </div>
                <div className="itens downloads">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7 10L12 15L17 10" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 15V3" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> <p className='txt'>Downloads</p>
                </div>
                <div className="itens filmes">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19.82 2H4.18C2.97602 2 2 2.97602 2 4.18V19.82C2 21.024 2.97602 22 4.18 22H19.82C21.024 22 22 21.024 22 19.82V4.18C22 2.97602 21.024 2 19.82 2Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7 2V22" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17 2V22" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2 12H22" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2 7H7" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2 17H7" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17 17H22" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17 7H22" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> <p className='txt'>Filmes</p>
                </div>
                <div className="itens aprender">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2V2Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> <p className='txt'>Aprender</p>
                </div>
                <div className="itens esportes">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> <p className='txt'>Esportes</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Menu