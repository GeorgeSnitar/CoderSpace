import React from 'react';
import style from './ModalWelcome.module.css';
import { useStaticQuery, graphql } from 'gatsby';

const ModalWelcome = (props) => {
    const data = useStaticQuery(graphql`
        query MyModuleWelcome {
            contentfulModal {
            modalImage {
                resolutions {
                src
                }
            }
            modalText {
                modalText
            }
            }
        }
`)

    return (
        <div className={style.modalWelcome}>
            <button onClick={props.onClose}>X</button>
            <h1>{data.contentfulModal.modalText.modalText}</h1>
            <img src={data.contentfulModal.modalImage.resolutions.src} />
        </div>
    )
}

export default ModalWelcome;
