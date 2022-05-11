function Project(props) {
    return (
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.description}</p>
            <a href="#" class="card-link">{props.deploy}</a>
            <a href="#" class="card-link">{props.github}</a>
            </div>
        </div>
    );
}

export default Project;