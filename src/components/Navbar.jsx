import styled from "styled-components";

const Navbar = () => {
    return (
        <Container>
            <div id="logo">
                <img alt="logo" src="images/ProjectLogo.svg" />
                <p>Daietto</p>
            </div>

            <div id="menu">
                <p>Nosotros</p>
                <p>Menu</p>
                <p>Contacto</p>
            </div>

            <div id="autorisation">
                <p>Login</p>
                <p>Register</p>
            </div>
        </Container>
    );
};

export default Navbar;

const Container = styled.div`
    height: 4.0981rem;
    margin: 3.75rem 0 10.3125rem;
    /* background: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;

    #logo {
        display: flex;
        align-items: center;

        img {
            width: 69.84px;
            height: 65.57px;
        }
        p {
            font-weight: bold;
            font-size: 47px;
            color: #23233c;
            margin-left: 1.375rem;
        }
    }

    #menu {
        display: flex;
        align-items: center;

        p {
            font-weight: 500;
            font-size: 1.5625rem;
            color: #7f8da0;

            &:not(:last-child) {
                margin-right: 4.0625rem;
            }
        }
    }

    #autorisation {
        display: flex;
        align-items: center;

        p {
            font-weight: bold;
            font-size: 25px;
            color: #23233c;

            &:last-child {
                color: #6bc37c;
            }

            &:not(:last-child) {
                margin-right: 3.125rem;
            }
        }
    }
`;
