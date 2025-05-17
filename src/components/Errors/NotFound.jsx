import Error from "./Error";

function NotFound() {
    return (
        <Error
            code="404"
            title="Désolé, nous n'avons pas pu trouver cette page."
            message="Mais ne vous inquiétez pas, vous pouvez trouver plein d'autres
                choses sur notre page d'accueil."
        />
    );
}

export default NotFound;
