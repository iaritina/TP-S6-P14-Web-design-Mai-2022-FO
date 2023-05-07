import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MoonLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';
import api from '../api/contents';
import { Helmet } from 'react-helmet-async';

const ShowContent = () => {
    const { id } = useParams();
    const { title } = useParams();
    const newTitle = title.replace(/-/g, ' ');
    const [Cont, setCont] = useState("");
    const [loading, setLoading] = useState(true);
    const getAllCont = async () => {
        const res = await api.get("/Cont/" + id);

        return res.data.data;
    }
    useEffect(() => {
        const getCont = async () => {
            const Art = await getAllCont();
            if (Art) {
                setCont(Art);
                setLoading(false);
            }
        };
        getCont();
    });
    if (loading) return <div className='load'><MoonLoader
        color="#369cd6"
        loading
    /></div>
    return (
        <div>
            <Helmet>
                <title>{newTitle}</title>
                <link rel='canonical' href={'/content/' + Cont.date_redaction + '/' + id + '/ia/' + title} />
                <meta name='description' content={Cont.summary} />
                <meta name="twitter:creator" content="@Iaritina"></meta>
            </Helmet>
            <Container>
                <Row>
                    <Col>
                        <p className="text-muted">I.A</p>
                        <h1 className='contTitle'>{Cont.title}</h1>
                        <h2 className='contSousTitre'>{Cont.summary}</h2>
                        <div dangerouslySetInnerHTML={{ __html: Cont.description }} />
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default ShowContent;