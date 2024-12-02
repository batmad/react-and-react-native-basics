import React from'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

class About extends React.Component {
    render() {
        return (
            <div className="card mb-4 mt-4">
                <div className="card-body">
                    <h5 className="card-title">Selamat datang di Portofolio Saya!</h5>
                    <p className="card-text">
                        Halo, saya Bobby Atmadja, seorang Junior Web Developer dengan passion untuk
                        menciptakan pengalaman
                        pengguna yang menarik dan fungsional di dunia digital. Saya memiliki pengalaman
                        dalam
                        mengembangkan website menggunakan berbagai teknologi.
                    </p>
                    <p className="card-text">
                        Terima kasih telah mengunjungi portofolio saya. Jika Anda tertarik untuk terhubung dengan
                        saya!.
                    </p>

                    <div className="d-flex gap-3">
                        <a href="https://www.linkedin.com/in/boby-rizki-atmadja-178a84178/" className="btn btn-primary"
                            target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="me-2" /> LinkedIn
                        </a>

                        <a href="https://github.com/batmad" className="btn btn-dark" target="_blank"
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="me-2" /> GitHub
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;   