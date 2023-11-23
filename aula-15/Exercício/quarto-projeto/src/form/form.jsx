import './form.css';

const Form = ({handleSubmit, setCity, city}) => {
    return (
    <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Digite a cidade..."
              onChange={(e) => setCity(e.target.value)}
              value={city}
              />
            <button type="submit" className="button">Buscar</button>
          </form>
          )

}

export default Form;