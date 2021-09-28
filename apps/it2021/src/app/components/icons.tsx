import { ReactComponent as athletics } from '../../assets/icons/athletics.svg';
import { ReactComponent as baseball } from '../../assets/icons/baseball.svg';
import { ReactComponent as bocce } from '../../assets/icons/bocce.svg';
import { ReactComponent as canoeing } from '../../assets/icons/canoeing.svg';
import { ReactComponent as cinema } from '../../assets/icons/cinema.svg';
import { ReactComponent as cycling } from '../../assets/icons/cycling.svg';
import { ReactComponent as other } from '../../assets/icons/other.svg';
import { ReactComponent as eaa } from '../../assets/icons/eaa.svg';
import { ReactComponent as fencing } from '../../assets/icons/fencing.svg';
import { ReactComponent as fishing } from '../../assets/icons/fishing.svg';
import { ReactComponent as football } from '../../assets/icons/football.svg';
import { ReactComponent as gaming } from '../../assets/icons/gaming.svg';
import { ReactComponent as location } from '../../assets/icons/location.svg';
import { ReactComponent as martialarts } from '../../assets/icons/martialarts.svg';
import { ReactComponent as motocross } from '../../assets/icons/motocross.svg';
import { ReactComponent as music } from '../../assets/icons/music.svg';
import { ReactComponent as olympics } from '../../assets/icons/olympics.svg';
import { ReactComponent as polo } from '../../assets/icons/polo.svg';
import { ReactComponent as sailing } from '../../assets/icons/sailing.svg';
import { ReactComponent as skiing } from '../../assets/icons/skiing.svg';
import { ReactComponent as swimming } from '../../assets/icons/swimming.svg';
import { ReactComponent as tennis } from '../../assets/icons/tennis.svg';
import { ReactComponent as video } from '../../assets/icons/video.svg';
import { ReactComponent as volleyball } from '../../assets/icons/volleyball.svg';
import { ReactComponent as climbing } from '../../assets/icons/climbing.svg';

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
