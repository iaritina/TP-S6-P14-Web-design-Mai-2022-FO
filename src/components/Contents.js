import React, { useEffect, useState } from 'react';
import api from '../api/contents';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import { Helmet } from 'react-helmet-async';
//import { useNavigate } from 'react-router-dom';
const Contents = () => {
    const title = "I.T";
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);
    const getAllContents = async () => {
        const res = await api.get("/Cont");
        return res.data.data;
    }
    useEffect(() => {
        const allContents = async () => {
            const getAll = await getAllContents();
            if (getAll) setContents(getAll); setLoading(false);

        };
        allContents();
    }, []);
    if (loading) return <div className='load'><MoonLoader
        color="#369cd6"
        loading
    /></div>
    return (
        <div>
            <Helmet>
                <title>{title} - News, evenements - Explorez le monde avec l'I.A</title>
                <link rel='canonical' href='https://luminous-moonbeam-a5c412.netlify.app/' />
                <meta name='description' content="Explorez les dernieres actualites du monde numerique, notamment avec sur l'I.A qui est de plus en plus en tendances." />
                <meta name="twitter:creator" content="@Iaritina"></meta>

            </Helmet>
            <Container>
                <h1 className='en_tete'>{title}: <strong>Intelligence artificielle</strong></h1>
                <h2 className='sous-titre'>Quelques articles du moment sur l'<strong>I.A</strong></h2>
                <br />
                <Row xs={1} md={2} className="g-4">
                    {contents.map((c) => (
                        <Col key={c.idcont}>
                            <Card>
                                <Card.Body className='card-contenu'>
                                    <Card.Title className='cardTitle'><Link to={'/content/' + c.date_redaction + '/' + c.idcont + '/ia/' + c.title.replace(/\s+/g, '-')} style={{ textDecoration: 'none' }}>{c.title}</Link></Card.Title>
                                    <Card.Text className='cardText'>
                                        {c.summary}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container >
        </div>

    );
};

export default Contents;