import './loadingComponent.css'
import bottle from './bottle.png'

export default function LoadingComponent() {
    return (
        <div className="Loading">
            <p className='LoadintText'>Preparing data</p>
            <img src={bottle} className="bottle" alt="bottle" />
        </div>
    )
}