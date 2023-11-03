import logo from '../dom-images/filter.png';
import '../searchbar.css';
function SearchBar({searchQuery,setSearchQuery}){

    return (
        <div className='content-header'>
            <div className='search-head'>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='search-input' placeholder='Search' />
            </div>
            <p><span id='filter'>Filter</span> <img src={logo} alt='filter logo' className='filter-logo'/></p>
        </div>
    );
};

export default SearchBar;