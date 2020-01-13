import React from "react";
import Grid from "@material-ui/core/Grid";
import FooterPagePro from './../../Components/Footer/Footer';
import BlogCss from "./../../Containers/Blog/Blog.css"


const Blog = () => {

    return (
        <Grid container justify="center" >
            <Grid item lg={10} xs={12} >
                <table>
                    <tr>
                        <th className="product" >Product</th>
                        <th className="Description">Product Description</th>
                        <th className="Quantity">Quantity</th>
                        <th className="Price">Price</th>
                        <th className="Total">Total</th>
                    </tr>
                    <tr style={{ marginTop: "2%" }}>
                        <td >
                            <img width="80%" height="30%" src="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Chicken-6_57cba167-7d96-41a1-a4d2-3a6bd0352deb_medium.jpg?v=1578059253" />
                        </td>
                        <td className="productDescption">  Pretend Play Fashion Briefcase With Shoulder Bag</td>
                        <td >
                            <td className="plus_minse" style={{ width: "40px", textAlign: "center", fontSize: "20px" }}>    +      </td>
                            <td className="plus_minse" style={{ width: "40px", textAlign: "center", fontSize: "20px" }}>3</td>
                            <td className="plus_minse" style={{ width: "40px", textAlign: "center", fontSize: "20px" }}>-</td>
                            <span className="remove">remove</span>
                        </td>
                        <td id="price" > Rs.1,385</td>
                        <td id="total"> Rs.4,980</td>
                    </tr>
                    <tr>
                        <td >
                            <img width="80%" height="30%" src="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Chicken-6_57cba167-7d96-41a1-a4d2-3a6bd0352deb_medium.jpg?v=1578059253" />
                        </td>
                        <td className="productDescption" >  Eggs laying Walking Hen</td>
                        <td >
                            <td className="plus_minse" style={{ width: "40px", textAlign: "center", fontSize: "20px" }}>    +      </td>
                            <td className="plus_minse" style={{ width: "40px", textAlign: "center", fontSize: "20px" }}>3</td>
                            <td className="plus_minse" style={{ width: "40px", textAlign: "center", fontSize: "20px" }}>-</td>
                            <span className="remove">remove</span>

                        </td>
                        <td id="price"> Rs.1,385</td>
                        <td id="total" id="total"> Rs.4,980</td>

                    </tr> <tr style={{ marginTop: "3%" }}>
                        <td >
                            <img width="80%" height="30%" src="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Chicken-6_57cba167-7d96-41a1-a4d2-3a6bd0352deb_medium.jpg?v=1578059253" />

                        </td>
                        <td className="productDescption" > Metal Souvenir - Eiffel Tower</td>
                        <td >
                            <td className="plus_minse" style={{ width: "40px", textAlign: "center", fontSize: "20px" }}>    +      </td>
                            <td className="plus_minse" style={{ width: "40px", textAlign: "center", fontSize: "20px" }}>3</td>
                            <td className="plus_minse" style={{ width: "40px", textAlign: "center", fontSize: "20px" }}>-</td>
                            <span className="remove">remove</span>

                        </td>
                        <td id="price"> Rs.1,385</td>
                        <td id="total"> Rs.4,980</td>
                    </tr> <tr style={{ marginTop: "3%" }}>
                        <td >
                            <img width="80%" height="30%" src="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Chicken-6_57cba167-7d96-41a1-a4d2-3a6bd0352deb_medium.jpg?v=1578059253" />

                        </td>
                        <td className="productDescption">  Eggs laying Walking Hen</td>
                        <td >
                            <td className="plus_minse" style={{ width: "40px", textAlign: "center", fontSize: "20px" }}>    +      </td>
                            <td className="plus_minse" style={{ width: "40px", textAlign: "center", fontSize: "20px" }}>3</td>
                            <td className="plus_minse" style={{ width: "40px", textAlign: "center", fontSize: "20px" }}>-</td>
                            <span className="remove">remove</span>

                        </td>
                        <td id="price"> Rs.1,385</td>
                        <td id="total" id="total"> Rs.4,980</td>

                    </tr> <tr style={{ marginTop: "3%" }}>
                        <td >
                            <img width="80%" height="30%" src="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Chicken-6_57cba167-7d96-41a1-a4d2-3a6bd0352deb_medium.jpg?v=1578059253" />

                        </td>
                        <td className="productDescption"> Educational Cow With Light And Sound</td>
                        <td >
                            <td className="plus_minse" style={{ width: "40px", textAlign: "center", fontSize: "20px" }}>    +      </td>
                            <td className="plus_minse" style={{ width: "40px", textAlign: "center", fontSize: "20px" }}>3</td>
                            <td className="plus_minse" style={{ width: "40px", textAlign: "center", fontSize: "20px" }}>-</td>
                            <span className="remove">remove</span>

                        </td>
                        <td id="price"> Rs.1,385</td>
                        <td id="total"> Rs.4,980</td>

                    </tr> <tr style={{ marginTop: "3%" }}>
                        <td >
                            <img width="80%" height="30%" src="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Chicken-6_57cba167-7d96-41a1-a4d2-3a6bd0352deb_medium.jpg?v=1578059253" />

                        </td>
                        <td className="productDescption">  Metal Souvenir - Burj Khalifa</td>

                        <td >
                            <td className="plus_minse" style={{ width: "40px", textAlign: "center", fontSize: "20px" }}>    +      </td>
                            <td className="plus_minse" style={{ width: "40px", textAlign: "center", fontSize: "20px" }}>3</td>
                            <td className="plus_minse" style={{ width: "40px", textAlign: "center", fontSize: "20px" }}>-</td>
                            <span className="remove">remove</span>

                        </td>
                        <td id="price"> Rs.1,385</td>
                        <td id="total"> Rs.4,980</td>

                    </tr>


                </table>
            </Grid>
        </Grid>
    )

}
export default Blog;
