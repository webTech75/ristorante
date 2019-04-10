import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    const Menu = (props) => {

        const menu = props.dishes.map((dish, i) => (
                <div key={i} className="col-12 col-md-5 m-1">
                    <Card>
                        <Link to={`/menu/${dish.id}`}>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardImgOverlay className="ml-5">
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Link>
                    </Card>
                </div>
        ));

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/home'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>


        )

    }

    export default Menu;