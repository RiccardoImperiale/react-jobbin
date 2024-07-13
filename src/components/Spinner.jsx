import ClipLoader from "react-spinners/ClipLoader";
import '../assets/css/spinner.css'

export default function Spinner({ loading }) {
    return (
        <div className="spinner">
            <ClipLoader
                color='var(--jo-primary)'
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}
