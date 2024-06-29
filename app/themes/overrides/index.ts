import type {} from '@mui/lab/themeAugmentation';
import type { Theme } from '@mui/material/styles';
import merge from 'lodash.merge';
import Alert from './Alert';
import Avatar from './Avatar';
import Button from './Button';
import Checkbox from './Checkbox';
import Chip from './Chip';
import FormControlLabel from './FormControlLabel';
import Icon from './Icon';
import IconButton from './IconButton';
import LinearProgress from './LinearProgress';
import Link from './Link';
import LoadingButton from './LoadingButton';
import OutlinedInput from './OutlinedInput';
import Paper from './Paper';
import Radio from './Radio';
import Select from './Select';
import SvgIcon from './SvgIcon';
import TableCell from './TableCell';
import TextField from './TextField';

const overrides = (theme: Theme) =>
  merge(
    {},
    TextField(theme),
    OutlinedInput(theme),
    Avatar(theme),
    Button(theme),
    LoadingButton(theme),
    Checkbox(theme),
    IconButton(theme),
    LinearProgress(theme),
    Link(theme),
    Icon(theme),
    SvgIcon(theme),
    Paper(theme),
    TableCell(theme),
    FormControlLabel(theme),
    Alert(theme),
    Radio(theme),
    Select(theme),
    Chip(theme)
  );

export default overrides;
