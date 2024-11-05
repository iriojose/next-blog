

export default function NotFound({ title }: { title: string }) {
    return (
        <div className="text-3xl font-bold text-red-400 flex items-center justify-center min-h-96">
            <p className=""> { title } </p>
        </div>
    )
}