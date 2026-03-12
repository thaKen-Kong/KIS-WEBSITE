export function StrandTracks({ tracks = [], className = "" }) {
    return (
        <div className={`strand-tracks ${className}`.trim()}>
            {tracks.map((track) => (
                <span key={track}>{track}</span>
            ))}
        </div>
    )
}
