import './loadingComponent.css'
import bottle from './bottle.png'

export default function LoadingComponent() {
    return (
        <div className="Loading">
            <p className='LoadintText'>Preparing data</p>
            <img src={bottle} className="Bottle" alt="bottle" />
        </div>
    )
}