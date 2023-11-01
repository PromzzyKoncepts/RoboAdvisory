import { useCountUp } from 'react-countup';
import CounterItem from './counterItem';
import { Google, Money, People, PhoneIphone } from '@mui/icons-material';

const AboutCounter = () => {
  useCountUp({ ref: 'Trusted Clients', end: 290, duration: 10 });
  useCountUp({ ref: 'In assets managed', end: 43, duration: 10 });
  useCountUp({ ref: 'Apple App Store', end: 92, duration: 10 });
  useCountUp({ ref: 'Google Play Store', end: 50, duration: 10 });

  return (
    <div className=" ">
      <div className="flex justify-between pt-7 ">
        <CounterItem
          icon={<People fontSize="large" />}
          title="Trusted Clients"
          counter={<span id="Trusted Clients" />}
          measurement="K+"
        />

        <CounterItem
          icon={<Money fontSize="large" />}
          symbol="$"
          title="In assets managed"
          counter={<span id="In assets managed" />}
          measurement="+"
        />

        <CounterItem
          icon={<PhoneIphone fontSize="large" />}
          title="Apple App Store"
          counter={<span id="Apple App Store" />}
          measurement="%"
        />

        <CounterItem
          icon={<Google fontSize="large" />}
          title="Google Play Store"
          counter={<span id="Google Play Store" />}
          measurement="+"
        />
      </div>
    </div>
  );
};

export default AboutCounter;
