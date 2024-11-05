export default function Footer() {  
    return (
        <div className="bg-gray-800 p-4 mt-24">
            <div className="container mx-auto text-center">
                <p className="text-white">
                    &copy; {new Date().getFullYear()} Star War Blog. Todos los derechos reservados.
                </p>
            </div>
        </div>
    );
}