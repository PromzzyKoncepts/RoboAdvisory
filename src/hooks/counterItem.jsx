import Proptypes from 'prop-types';

const CounterItem = ({ title, counter, measurement, icon, symbol }) => (
  <div className="">
    <h2 className="text-4xl text-slate-800 flex gap-1 items-center md:justify-center font-bold">
      <p className="">{icon}</p>
      {symbol && <p>{symbol}</p>}
      {counter} {measurement}
    </h2>
    <span className="">{title}</span>
  </div>
);

export default CounterItem;
CounterItem.propTypes = {
  title: Proptypes.string.isRequired,
  counter: Proptypes.object.isRequired,
  measurement: Proptypes.string.isRequired,
  symbol: Proptypes.string.isRequired,
  icon: Proptypes.object.isRequired,
};
