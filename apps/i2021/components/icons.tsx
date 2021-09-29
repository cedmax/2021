import { ReactComponent as athletics } from '../public/icons/athletics.svg';
import { ReactComponent as baseball } from '../public/icons/baseball.svg';
import { ReactComponent as bocce } from '../public/icons/bocce.svg';
import { ReactComponent as canoeing } from '../public/icons/canoeing.svg';
import { ReactComponent as cinema } from '../public/icons/cinema.svg';
import { ReactComponent as cycling } from '../public/icons/cycling.svg';
import { ReactComponent as other } from '../public/icons/other.svg';
import { ReactComponent as eaa } from '../public/icons/eaa.svg';
import { ReactComponent as fencing } from '../public/icons/fencing.svg';
import { ReactComponent as fishing } from '../public/icons/fishing.svg';
import { ReactComponent as football } from '../public/icons/football.svg';
import { ReactComponent as gaming } from '../public/icons/gaming.svg';
import { ReactComponent as location } from '../public/icons/location.svg';
import { ReactComponent as martialarts } from '../public/icons/martialarts.svg';
import { ReactComponent as motocross } from '../public/icons/motocross.svg';
import { ReactComponent as music } from '../public/icons/music.svg';
import { ReactComponent as olympics } from '../public/icons/olympics.svg';
import { ReactComponent as polo } from '../public/icons/polo.svg';
import { ReactComponent as sailing } from '../public/icons/sailing.svg';
import { ReactComponent as skiing } from '../public/icons/skiing.svg';
import { ReactComponent as swimming } from '../public/icons/swimming.svg';
import { ReactComponent as tennis } from '../public/icons/tennis.svg';
import { ReactComponent as video } from '../public/icons/video.svg';
import { ReactComponent as volleyball } from '../public/icons/volleyball.svg';
import { ReactComponent as climbing } from '../public/icons/climbing.svg';

type iconTypes = {
  [key: string]: React.ComponentType;
};

const icons: iconTypes = {
  athletics,
  baseball,
  bocce,
  canoeing,
  cinema,
  cycling,
  eaa,
  fencing,
  fishing,
  football,
  gaming,
  location,
  martialarts,
  motocross,
  music,
  olympics,
  polo,
  sailing,
  skiing,
  swimming,
  tennis,
  video,
  volleyball,
  other,
  climbing,
};

export default icons;
