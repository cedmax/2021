import { ReactComponent as archery } from '../public/icons/archery.svg';
import { ReactComponent as aswc } from '../public/icons/aswc.svg';
import { ReactComponent as athletics } from '../public/icons/athletics.svg';
import { ReactComponent as baseball } from '../public/icons/baseball.svg';
import { ReactComponent as bocce } from '../public/icons/bocce.svg';
import { ReactComponent as boxing } from '../public/icons/boxing.svg';
import { ReactComponent as canoeing } from '../public/icons/canoeing.svg';
import { ReactComponent as climbing } from '../public/icons/climbing.svg';
import { ReactComponent as cricket } from '../public/icons/cricket.svg';
import { ReactComponent as cycling } from '../public/icons/cycling.svg';
import { ReactComponent as eaa } from '../public/icons/eaa.svg';
import { ReactComponent as entertainment } from '../public/icons/entertainment.svg';
import { ReactComponent as fencing } from '../public/icons/fencing.svg';
import { ReactComponent as fishing } from '../public/icons/fishing.svg';
import { ReactComponent as football } from '../public/icons/football.svg';
import { ReactComponent as gaming } from '../public/icons/gaming.svg';
import { ReactComponent as location } from '../public/icons/location.svg';
import { ReactComponent as martialarts } from '../public/icons/martialarts.svg';
import { ReactComponent as motocross } from '../public/icons/motocross.svg';
import { ReactComponent as olympics } from '../public/icons/olympics.svg';
import { ReactComponent as other } from '../public/icons/other.svg';
import { ReactComponent as polo } from '../public/icons/polo.svg';
import { ReactComponent as sailing } from '../public/icons/sailing.svg';
import { ReactComponent as skating } from '../public/icons/skating.svg';
import { ReactComponent as skiing } from '../public/icons/skiing.svg';
import { ReactComponent as swimming } from '../public/icons/swimming.svg';
import { ReactComponent as tennis } from '../public/icons/tennis.svg';
import { ReactComponent as video } from '../public/icons/video.svg';
import { ReactComponent as volleyball } from '../public/icons/volleyball.svg';
import { ReactComponent as weather } from '../public/icons/weather.svg';

type iconTypes = {
  [key: string]: React.ComponentType;
};

const icons: iconTypes = {
  archery,
  aswc,
  athletics,
  baseball,
  bocce,
  boxing,
  canoeing,
  climbing,
  cricket,
  cycling,
  eaa,
  entertainment,
  fencing,
  fishing,
  football,
  gaming,
  location,
  martialarts,
  motocross,
  olympics,
  other,
  polo,
  sailing,
  skating,
  skiing,
  swimming,
  tennis,
  video,
  volleyball,
  weather,
};

export default icons;
