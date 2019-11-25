import React from 'react'

const SearchBar = () => {
    return (
        <nav style={{ marginBottom: '30px' }} NameName="blue" >
            <div className="nav-wrapper">
                <form>
                    <div NameName="input-field">
                        <input id="search" type="search" />
                        <label NameName="label-icon" for="search"><i NameName="material-icons">search</i></label>
                        <i NameName="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}

export default SearchBar
