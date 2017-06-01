var React = require('react');
var PropTypes = require('prop-types');

<<<<<<< HEAD
function SelectLanguage (props) {
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className='languages'>
      {languages.map(function (lang) {
        return (
          <li
            style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
              {lang}
          </li>
        )
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

class Popular extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedLanguage: 'All',
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang,
      }
    });
  }
  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
      </div>
    )
  }
=======
class SelectLanguage extends React.Component {
	render() {
		var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
		return (
			<ul className='languages'>
				{languages.map(function(lang) {
					return (
						<li
							style={lang === this.props.selectedLanguage ? { color: '#d0021b'}: null}
							onClick={this.props.onSelect.bind(null, lang)}
							key={lang}>
							{lang}
						</li>
					)
				})}
			</ul>
		)
	}	
}

SelectLanguage.propTypes = {
	selectedLanguage: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired,
}

class Popular extends React.Component {
	constructor(props) {
		super()
		this.state = {
			selectedLanguage: "All"
		};
		this.updateLanguage = this.updateLanguage.bind(this);
	}
	updateLanguage(lang) {
		this.setState(function () {
			return {
				selectedLanguage: lang,
			}
		});
	}
	render() {
		return (
			<div>
				<SelectLanguage 
					selectedLanguage={this.state.selectedLanguage}
					onSelect={this.updateLanguage}/>
			</div>
		)
	}
>>>>>>> 2e3799a4b21720b978d4c04a6eeb2ff7a3a43789
}

module.exports = Popular;