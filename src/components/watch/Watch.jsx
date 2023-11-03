import React from "react";
import './Styled.css'

const Watch = () => {
    return (

        <div className="video-content">
            <div className="dad-frame">
                <iframe className="video" src="https://www.youtube.com/embed/snEKQ0d-0FU?si=e8aCDHvFooj535aq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; " allowfullscreen></iframe>
            </div>

            <h3 style={{ margin: "20px 0" }}>alanzoka Jogando Devour, The Town com amigos - #1</h3>


            <div style={{ display: "flex" }} className="content">

                <div className="channel-info">
                    <img style={{ borderRadius: "50%", width: "48px", height: "48px" }} src="https://yt3.googleusercontent.com/ytc/APkrFKaMHI0SOyDfYb7Sd1E6XgyrpmFQaiLsvApjZLsZuQ=s176-c-k-c0x00ffffff-no-rj" alt="" />
                    <div className="channel">
                        <h4>Lives do alanzoka ✓</h4>
                        <div>
                            <span style={{ fontSize: "13px" }}>3,33 mi de inscritos</span>
                        </div>
                    </div>
                    <div>
                        <button className="subscribe-button pointer">
                            Inscrever-se
                        </button>
                    </div>
                </div>

                <div className="shared-infos">
                    <div style={{ display: "flex" }}>
                        <div>
                            <button className="pointer like">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                                </svg> <h4>152 mil</h4>
                            </button>
                        </div>
                        <div>
                            <button className="pointer dislike"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M17 2H19.67C20.236 1.98999 20.7859 2.18813 21.2154 2.55681C21.6449 2.9255 21.9241 3.43905 22 4V11C21.9241 11.5609 21.6449 12.0745 21.2154 12.4432C20.7859 12.8119 20.236 13.01 19.67 13H17M10 15V19C10 19.7956 10.3161 20.5587 10.8787 21.1213C11.4413 21.6839 12.2044 22 13 22L17 13V2H5.72C5.23767 1.99454 4.76962 2.16359 4.40209 2.47599C4.03457 2.78839 3.79232 3.22309 3.72 3.7L2.34 12.7C2.29649 12.9866 2.31583 13.2793 2.39666 13.5577C2.47749 13.8362 2.6179 14.0937 2.80814 14.3125C2.99839 14.5313 3.23392 14.7061 3.49843 14.8248C3.76294 14.9435 4.05009 15.0033 4.34 15H10Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>  </button>
                        </div>
                    </div>

                    <div>
                        <button className="pointer button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.59 13.51L15.42 17.49" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.41 6.50999L8.59 10.49" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        </svg><h4>Compartilhar</h4></button>
                    </div>
                    <div>
                        <button className="pointer button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7 10L12 15L17 10" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 15V3" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                        </svg><h4>Salvar</h4></button>
                    </div>
                    <div>
                        <button className="pointer button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                        </svg></button>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Watch;