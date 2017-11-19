# React 
## Primer componente

<code>

    class RobotBox extends React.Component {
        render(){
            return (<div> Hello From React </div>)
        }
    }

    let target = document.getElementById('robot-app');

    ReactDOM.render( <RobotBox/>,target  );

</code>

### Componente usando JSX

<code>

    class RobotBox extends React.Component {
        render(){
            return (<div> Hello From React </div>)
        }
    }

    ReactDOM.render( <RobotBox/>, document.getElementById('robot-app')  );

</code>

### Sintaxis de JSX
classname es una palabra reservada de JS
<code>

    class RobotBox extends React.Component {
        render(){
            return (
            <div>
                <h3> Hello From React </h3>
                <p className="lead"> Ejemplo </p>
            </div>
            )
        }
    }

</code>

Esto renderiza a JS como ("elemento", "prop", contenido)
<code>

    React.creatElement("div", null),
    React.creatElement("h3", null, "Hello From React"),
    React.creatElement("p",{className="lead"}, Ejemplo);

</code>

- código de JS dentro de JSX {}
<code>
    {pi}
</code>

Ejemplo
<code>

    class RobotTime extends React.Component {
        render() {
        const pi = Math.PI;
        return (
        <div  className="is-tasty-pie" >
            The value of PI is approximately {pi}
        </div>
        );
    }

</code>
- iterando array
<code>
    {array.map(el => <li>{el}</li>)}   
</code>

Ejemplo
<code>

    class RobotItems extends React.Component {
    render() {
        const topics = ["React", "JSX", "JavaScript", "Programming"];
        return (
        <div>
            <h3>Topics I am interested in</h3>
            <ul>
            {topics.map(el => <li>{el}</li>)}   
            </ul>
        </div>
        );
    }
    }

</code>

## Props
### Componentes

en HTML

<code>

    <div class="comment">
        <div class="comment-body">
            blablab
        </div>
    </div>
</code>


en JSX
<code>

    ...
    return(
    <div className="comment">
        <div className="comment-body">
            blablab
        </div>
    </div>);
</code>

Ejemplo

<code>

    class Comment extends React.Component{
        render(){
            return(
            <div className="comment">
                <p className="comment-header">Anne Droid</p>
                <p className="comment-body">
                    I wanna know what love is...
                </p>
                <div className="comment-actions">
                    <a href="#">Delete comment</a>
                </div>
            </div>
            );
        }
    }

</code>

### Pasando/Recibiendo props
pasando argumentos (props)
<code>

    <Comment author="nombre" />
</code>

recibiendo props
<code>

    <div className="comment">
        <p>{this.props.author}</p>
    </div>
</code>

Ejemplo
<code>

    class Comment extends React.Component {
    render() {
        return(
        <div className="comment">
            <p className="comment-header">
            {this.props.author}
            </p>
            <p className="comment-body">
            {this.props.body}
            </p>
            <div className="comment-actions">
            <a href="#">Delete comment</a>
            </div>
        </div>
        );
    }
    }
</code>

### Propiedades dinamicas
pasar propiedad dinamica
<code>
    <Comment author={comment.author} />
</code>
ejemplo

<code>

    class CommentBox extends React.Component {
    render() {
        const comments = this._getComments() || [];
        return(
        <div className="comment-box">
            <h3>Comments</h3>
            <h4 className="comment-count">{comments.length} comments</h4>
            <div className="comment-list">
            {comments}
            </div>
        </div>
        );
    }
  
    _getComments() {
        const commentList = [
        { id: 1, author: 'Clu', body: 'Just say no to love!' , avatarUrl:'images/default-avatar.png'},
        { id: 2, author: 'Anne Droid', body: 'I wanna know what love is...' ,avatarUrl:'images/default-avatar.png'}
        ];    

        return commentList.map( (el)=>{
        <Comment author={el.author} body={el.body} avatarUrl={el.avatarUrl} key={el.id}/> 
        })
    }
    }

</code>

### Agregando JS a la propiedad
Para este caso agrega JS al alt 
<code>

    class Comment extends React.Component {
    render() {
        return(
        <div className="comment">
            <img src={this.props.avatarUrl} alt={`${this.props.author}'s picture`}> 
            </img>
        </div>
        )}
    }

</code>

## usando función 

<code>

    <h3 className="comments">{this._getPopularMessage(comments.length)}</h3>

    _getPopularMessage(commentCount) {
        const POPULAR_COUNT = 10;
            if (commentCount > POPULAR_COUNT){
            return (<div> This post is getting really popular, don't miss out! </div>);
            }

</code>

## States

### Usar estados
- definir en el constructor
- modificar si es necesario su valor
- enviar al render()

<code>

    constructor(){
        super();
        this.state ={estado: true}
    }

    let texto;
    render(){
        if (this.state.estado){
            texto= "verd";
        }
        else{
            texto="jljklj";
        }
        return (<h3>{texto}<</h3>>);
    }


</code>

Ejemplo:
<code>
    render() {
    
    let commentBody;
    if (!this.state.isAbusive){
      commentBody= this.props.body;
    }
    else{
      commentBody=<em>Content marked as abusive</em>;
    }
    
    return(
      <div className="comment">      
       <p className="comment-body">
          <p>{commentBody}</p>
        </p>
      </div>
    )}

</code>
### Modificar estados
<code>

    this.setState({showComments: true})

</code>

Causas que pueden causar un cambio de estado:
- click en botón
- clik en link
- enviar form
- AJAX request
- otros

### Manejando Eventos
el evento debe pasar el this
<code>

    ..
    return(
        <button onClick={this._eventoClick.bind(this)}> Hola
        </button>
    )
    ..
    _eventoClick{
        this.setState({showComments: !this.state.showComments})
    }

</code>

## Synthetic events
Permite manejar eventos sin importar el navegador
Estructura del ejemplo:
- CommentBox
    -CommentForm
    -Comment
### Refs

para acceder a los campos en un formulario se usa ref
<code>
    
    En HTML
    <input placeholder="Name" ref={(input) => this._author= input}>

    usando el ref en JSX (llegan como variables locales)
    _handleSubmit(event){
        let author= this._author;
    }
</code>

## Pasando datos 
para compartir los datos de un componente a otro utilizo props
Para este caso los elementos estan guardados como state en el segundo componente, lo que se hace es crear un elemento nuevo y guardarlo, se lo podría agregar con push (pero concat es más rápido).

<code>

    en el componente 1
    _evento(){
        ..
        this.props.addComponent(variable.value)
    }

    en el componente 2
    <Componente addComponente={this._evento2.bind(this)}>
    ...

    _evento2(campo){
        const elemento ={
        id: this.state.items.length +1,
        campo
        }
        this.setState({elementos: this.state.elementos.concat([elemento])})
    }

</code>

Ejemplo
<code>

    class Comment extends React.Component {
    constructor() {
        super();
        this.state = {
        isAbusive: false
        };
    }

    render() {
        let commentBody;
        if (!this.state.isAbusive) {
        commentBody = this.props.body;
        } else {
        commentBody = <em>Content marked as abusive</em>;
        }
        return(
        <div className="comment">
            <img src={this.props.avatarUrl} alt={`${this.props.author}'s picture`} />
            <p className="comment-header">{this.props.author}</p>
            <p className="comment-body">
            {commentBody}
            </p>
            <div className="comment-actions">
            <a href="#">Delete comment</a>
            <a href="#" onClick={this._toggleAbuse.bind(this)}>Report as Abuse</a>
            </div>
        </div>
        );
    }

    _toggleAbuse(event) {
        event.preventDefault();

        this.setState({
        isAbusive: !this.state.isAbusive
        });
    }
    }

    class CommentBox extends React.Component {

    constructor() {
        super();

        this.state = {
        showComments: false,
        comments: [
            { id: 1, author: 'Morgan McCircuit', body: 'Great picture!', avatarUrl: 'images/default-avatar.png' },
            { id: 2, author: 'Bending Bender', body: 'Excellent stuff', avatarUrl: 'images/default-avatar.png' }
        ]
        };
    }

    render() {
        const comments = this._getComments();
        return(
        <div className="comment-box">
            <CommentForm addComment={this._addComment.bind(this)} />
            <h3>Comments</h3>
            {this._getPopularMessage(comments.length)}
            <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
            <div className="comment-list">
            {comments}
            </div>
        </div>
        );
    }

    _getPopularMessage(commentCount) {
        const POPULAR_COUNT = 10;
        if (commentCount > POPULAR_COUNT) {
        return (
            <div>This post is getting really popular, don't miss out!</div>
        );
        }
    }

    _getComments() {
        return this.state.comments.map((comment) => {
        return (<Comment
                author={comment.author}
                body={comment.body}
                avatarUrl={comment.avatarUrl}
                key={comment.id} />);
        });
    }

    _getCommentsTitle(commentCount) {
        if (commentCount === 0) {
        return 'No comments yet';
        } else if (commentCount === 1) {
        return '1 comment';
        } else {
        return `${commentCount} comments`;
        }
    }

    _addComment(commentAuthor, commentBody) {
        let comment = {
        id: Math.floor(Math.random() * (9999 - this.state.comments.length + 1)) + this.state.comments.length,
        author: commentAuthor,
        body: commentBody
        };

        this.setState({
        comments: this.state.comments.concat([comment])
        });
    }
    }

    class CommentForm extends React.Component {
    constructor() {
        super();
        this.state = {
        characters: 0
        };
    }

    render() {
        return (
        <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
            <label>New comment</label>
            <div className="comment-form-fields">
            <input placeholder="Name:" ref={input => this._author = input} />
            <textarea
                placeholder="Comment:"
                ref={textarea => this._body = textarea}
                onKeyUp={this._getCharacterCount.bind(this)}


                ></textarea>
            </div>
            <p>{this.state.characters} characters</p>
            <div className="comment-form-actions">
            <button type="submit">
                Post comment
            </button>
            </div>
        </form>
        );
    }

    _handleSubmit(event) {
        event.preventDefault();

        //validación
        if (!this._author.value || !this._body.value) {
        alert('Please enter your name and comment');
        return;
        }

        this.props.addComment(this._author.value, this._body.value);

        this._author.value = '';
        this._body.value = '';

        this.setState({ characters: 0 });
    }
    _getCharacterCount(){
        this.setState({characters:this._body.value.length})
    }
    
    }

</code>

### Los items que se modifican van en state

<code>

    constructor(){
        super();
        this.state={
            mostrarItems: false,
            items=[
                {id:1, nombre: "khjk"},
                {id:2, nombre:"jhkh"}
            ]
        }

    }
</code>

## Ciclo de vida
-contructor()
-componentWillMount()
-render()
-componentDidMount()
-componentWillUnmount()


### cargando elementos desde un servidor
<code>

    class Componente extends React.Component{
        ...
        componentWillMount(){
            _esperarItems();
        }

        _esperarItems(){
            jQuery.ajax({
                method:'GET',
                url:'/api/elementos',
                success:(elementos)=>{
                    this.setState({elementos})
                }
            })
        }

    }
</code>

### agregando Polling data
Significa que busca cambios en el origen mientras el componente es renderizado. Esto puede realizarse en el método componentDidMount

<code>

    class Componente extends React.Component{
        ...
        componentDidMount(){
            setInterval(()=> this._esperarItems(), 5000);
        }    
    }
</code>

### Previniendo Memory Leaks
Para evitar problemas con los timers de los componentes es mejor removerlos cuando dejen de usarse.



<code>
    class Componente extends React.Component{
        ...
        componentDidMount(){
            this._timer= setInterval(
                ()=> this._esperarItems(), 5000);
        }    

        componentWillUnmount(){
            clearInterval(this._timer);
        }
    }
</code>

### Pasos para cargar elementos
1- componentWillMount() 
2- render(), el componente aparece
3- Componente espera la respuesta del API, cuando llega setState es llamada, lo cual causa que render() se llame de nuevo.
4- componentDidMount(), los elementos se empiezan a llamar cada X segundos
5- componentWillUnmount(), el elemento se remueve del DOM y se limpia los timers

### Ejemplo
<code>
    class CommentBox extends React.Component {
    constructor() {
        super();

        this.state = {
        showComments: false,
        comments: []
        };
    }

    render() {
        const comments = this._getComments();
        return(
        <div className="comment-box">
            <CommentForm addComment={this._addComment.bind(this)} />
            <CommentAvatarList avatars={this._getAvatars(comments)}/>
            {this._getPopularMessage(comments.length)}
            <h3 className="comment-count">{this._getCommentsTitle(comments.length)}</h3>
            <div className="comment-list">
            {comments}
            </div>
        </div>
        );
    }

    _getAvatars() {
    return this.state.comments.map((comment) => comment.avatarUrl);
  
   }

    _fetchComments() {
        $.ajax({
        method: 'GET',
        url: 'comments.json',
        success: (comments) => {
            this.setState({comments})
        }
        });
    }
            componentWillMount(){
                this._fetchComments();
            }
    
    
    _getPopularMessage(commentCount) {
        const POPULAR_COUNT = 10;
        if (commentCount > POPULAR_COUNT) {
        return (
            <div>This post is getting really popular, don't miss out!</div>
        );
        }
    }

    _getComments() {
        return this.state.comments.map((comment) => {
        return (<Comment
                id={comment.id}
                author={comment.author}
                body={comment.body}
                avatarUrl={comment.avatarUrl}
                key={comment.id} />);
        });
    }

    _getCommentsTitle(commentCount) {
        if (commentCount === 0) {
        return 'No comments yet';
        } else if (commentCount === 1) {
        return '1 comment';
        } else {
        return `${commentCount} comments`;
        }
    }

    _addComment(commentAuthor, commentBody) {
        let comment = {
        id: Math.floor(Math.random() * (9999 - this.state.comments.length + 1)) + this.state.comments.length,
        author: commentAuthor,
        body: commentBody,
        avatarUrl: 'images/default-avatar.png'
        };

        this.setState({
        comments: this.state.comments.concat([comment])
        });
    }

    _deleteComment(commentID) {
        const comments = this.state.comments.filter(
        comment => comment.id !== commentID
        );

        this.setState({ comments });
    }
    }

    class Comment extends React.Component {
    constructor() {
        super();
        this.state = {
        isAbusive: false
        };
    }

    render() {

        let commentBody;

        if (!this.state.isAbusive) {
        commentBody = this.props.body;
        } else {
        commentBody = <em>Content marked as abusive</em>;
        }

        return(
        <div className="comment">
            <img src={this.props.avatarUrl} alt={`${this.props.author}'s picture`} />
            <p className="comment-header">{this.props.author}</p>
            <p className="comment-body">
            {commentBody}
            </p>
            <div className="comment-actions">
            <a href="#">Delete comment</a>
            <a href="#" onClick={this._toggleAbuse.bind(this)}>Report as Abuse</a>
            </div>
        </div>
        );
    }

    _toggleAbuse(event) {
        event.preventDefault();

        this.setState({
        isAbusive: !this.state.isAbusive
        });
    }

    _handleDelete(event) {
        event.preventDefault();

        if (confirm('Are you sure?')) {
        this.props.onDelete(this.props.id);
        }
    }
    }

    class CommentForm extends React.Component {
    constructor() {
        super();
        this.state = {
        characters: 0
        };
    }

    render() {
        return (
        <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
            <label>New comment</label>
            <div className="comment-form-fields">
            <input placeholder="Name:" ref={c => this._author = c} />
            <textarea placeholder="Comment:" ref={c => this._body = c} onChange={this._getCharacterCount.bind(this)}></textarea>
            </div>
            <p>{this.state.characters} characters</p>
            <div className="comment-form-actions">
            <button type="submit">
                Post comment
            </button>
            </div>
        </form>
        );
    }

    _getCharacterCount(e) {
        this.setState({
        characters: this._body.value.length
        });
    }

    _handleSubmit(event) {
        event.preventDefault();

        if (!this._author.value || !this._body.value) {
        alert('Please enter your name and comment.');
        return;
        }

        this.props.addComment(this._author.value, this._body.value);

        this._author.value = '';
        this._body.value = '';

        this.setState({ characters: 0  });
    }
    }

</code>

## Eliminando elementos con API
Desde un nivel superior al Elemento se debe agregar la opción de eliminar.
<code>

    class cajadeComponentes extends React.Component{
        _obtenerElementos(){
            return this.state.elementos.map(elemento=>{
                return (
                    <Elemento
                        ...
                        onDelete={this._deleteComment.bind(this)}
                    />
                )
            })
        }


        _deleteElemento(elemento){
            jQuery.ajax({
                method:'DELETE',
                url:`/api/elementos/${elemento.id}`
            })

            //utilizo operador "spread" para clonar el array
            const elementos = [...this.state.elementos]
            const elementoIndex= elementos.indexOf(elemento);
            //remuevo contenido
            elementos.splice(elementoIndex, 1);
            //actualizo
            this.setState({elementos})

        }
    }
</code>

### Usando el método de eliminar desde un botón
Ahora utilizo el método que me ha pasado el nivel superior cajadeElementos
<code>
        class Elemento extends React.Component{
            render(){
                return(
                    ..
                    <a href="#" onClick={this._delete.bind(this)}> Eliminar </a>
                )


            }
            _delete(event){
                event.preventDefault();
                if (confirm("estás seguro?")){
                    this.props.onDelete(this.props.elemento);
                }
                
            }


        }


    </code>

    ### problemas frecuentes al enviar al servidor
    - el ID debe ser generado desde el lado del server
    - deberia enviar al servidor el dato actualizado y luego actualizar el estado

    ### repaso
    - los componentes padres pueden enviar datos a sus hijos usando props
    - los componentes hijos puede aceptar "callback functions" como props para comunicarse con los componentes superiores.

    ### Ejemplo
    <code>
        class CommentBox extends React.Component {
    constructor() {
        super();

        this.state = {
        showComments: false,
        comments: []
        };
    }
    
    componentWillMount() {
        this._fetchComments();
    }

    render() {
        const comments = this._getComments();
        return(
        <div className="comment-box">
            <CommentForm addComment={this._addComment.bind(this)} />
            <CommentAvatarList avatars={this._getAvatars()} />
            {this._getPopularMessage(comments.length)}
            <h3 className="comment-count">{this._getCommentsTitle(comments.length)}</h3>
            <div className="comment-list">
            {comments}
            </div>
        </div>
        );
    }
    
    _getAvatars() {
        return this.state.comments.map(comment => comment.avatarUrl);
    }

    _getPopularMessage(commentCount) {
        const POPULAR_COUNT = 10;
        if (commentCount > POPULAR_COUNT) {
        return (
            <div>This post is getting really popular, don't miss out!</div>
        );
        }
    }
    
    _getComments() {
        return this.state.comments.map((comment) => {
        return (<Comment
                id={comment.id}
                author={comment.author}
                body={comment.body}
                avatarUrl={comment.avatarUrl}
                onDelete={this._deleteComment.bind(this)}
                key={comment.id} />);
        });
    }

    _getCommentsTitle(commentCount) {
        if (commentCount === 0) {
        return 'No comments yet';
        } else if (commentCount === 1) {
        return '1 comment';
        } else {
        return `${commentCount} comments`;
        }
    }
    
    _addComment(commentAuthor, commentBody) {
        let comment = {
        id: Math.floor(Math.random() * (9999 - this.state.comments.length + 1)) + this.state.comments.length,
        author: commentAuthor,
        body: commentBody,
        avatarUrl: 'images/default-avatar.png'
        };
        
        this.setState({
        comments: this.state.comments.concat([comment])
        });
    }
    
    _fetchComments() {
        $.ajax({
        method: 'GET',
        url: 'comments.json',
        success: (comments) => {
            this.setState({ comments });
        }
        });
    }
    
    _deleteComment(commentID) {
        const comments = this.state.comments.filter(
        comment => comment.id !== commentID
        );
        
        this.setState({ comments });
    }
    }

    class CommentForm extends React.Component {
    constructor() {
        super();
        this.state = {
        characters: 0
        };
    }
    
    render() {
        return (
        <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
            <label>New comment</label>
            <div className="comment-form-fields">
            <input placeholder="Name:" ref={c => this._author = c} />
            <textarea placeholder="Comment:" ref={c => this._body = c} onChange={this._getCharacterCount.bind(this)}></textarea>
            </div>
            <p>{this.state.characters} characters</p>
            <div className="comment-form-actions">
            <button type="submit">
                Post comment
            </button>
            </div>
        </form>
        );
    }
    
    _getCharacterCount(e) {
        this.setState({
        characters: this._body.value.length
        });
    }
    
    _handleSubmit(event) {
        event.preventDefault();
                
        if (!this._author.value || !this._body.value) {
        alert('Please enter your name and comment.');
        return;
        }

        this.props.addComment(this._author.value, this._body.value);
        
        this._author.value = '';
        this._body.value = '';
        
        this.setState({ characters: 0  });
    }
    }

    class CommentAvatarList extends React.Component {
    render() {
        const { avatars = [] } = this.props;
        return (
        <div className="comment-avatars">
            <h4>Authors</h4>
            <ul>
            {avatars.map((avatarUrl, i) => (
                <li key={i}>
                <img src={avatarUrl} />
                </li>
            ))}
            </ul>
        </div>
        );
    }
    }

    class Comment extends React.Component {
    constructor() {
        super();

        this.state = {
        isAbusive: false
        };
    }

    render() {
        let commentBody;
        if (!this.state.isAbusive) {
        commentBody = this.props.body;
        } else {
        commentBody = <em>Content marked as abusive</em>;
        }
        return(
        <div className="comment">
            <img src={this.props.avatarUrl} alt={`${this.props.author}'s picture`} />
            <p className="comment-header">{this.props.author}</p>
            <p className="comment-body">{commentBody}</p>
            <div className="comment-actions">
            <RemoveCommentConfirmation  onDelete={this._handleDelete.bind(this)}/>
            <a href="#" onClick={this._toggleAbuse.bind(this)}>Report as Abuse</a>
            </div>
        </div>
        );
    }

    _toggleAbuse(event) {
        event.preventDefault();

        this.setState({
        isAbusive: !this.state.isAbusive
        });
    }
    
    _handleDelete() {
        this.props.onDelete(this.props.id);
    }
    }

    class RemoveCommentConfirmation extends React.Component {
    constructor() {
        super();
        
        this.state = {
        showConfirm:false
        
        
        };
    }
    
    render() {
        let confirmNode;
        if (this.state.showConfirm) {
        return (
            <span>
            <a href="" onClick={this._confirmDelete.bind(this)}>Yes </a> - or - <a href="" onClick={this._toggleConfirmMessage.bind(this)}> No</a>
            </span>
        );
        } else {
        confirmNode = <a href="" onClick={this._toggleConfirmMessage.bind(this)}>Delete comment?</a>;
        }
        return (
        <span>{confirmNode}</span>
        );
    }
    
    _toggleConfirmMessage(e) {
        e.preventDefault();
        
        this.setState({
        showConfirm: !this.state.showConfirm
        });
    }
    
    _confirmDelete(e) {
        e.preventDefault();
        this.props.onDelete(this.props.elemento);
        
        
    }
    }

</code>