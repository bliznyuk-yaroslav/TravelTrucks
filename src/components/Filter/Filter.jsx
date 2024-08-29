import css from './Filter.module.css';
export default function Filter() {
  return (
    <div>
      <div>
        <label htmlFor="">Location</label>
        <div>
          <Icon />
          <select
          value={location}
          placeholder='Choose location'
          onChange={}
          
          
          />
        </div>
      </div>
    </div>
  );
}
