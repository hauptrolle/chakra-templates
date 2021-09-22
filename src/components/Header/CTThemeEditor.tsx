import { useColorModeValue } from '@chakra-ui/react';
import {
  HyperThemeEditorProps,
  ThemeEditor,
  ThemeEditorButton,
  ThemeEditorColors,
  ThemeEditorDrawer,
  ThemeEditorFontSizes,
} from '@hypertheme-editor/chakra-ui';
import { CgColorPicker } from 'react-icons/cg';
import { ImFontSize } from 'react-icons/im';

export const CTThemeEditor = () => {
  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <ThemeEditor>
      <ThemeEditorButton size="sm" bgColor={bgColor} />
      <ThemeEditorDrawer hideUpgradeToPro>
        <ThemeEditorColors icon={CgColorPicker} title="Colors" />
        <ThemeEditorFontSizes icon={ImFontSize} title="Font Sizes" />
      </ThemeEditorDrawer>
    </ThemeEditor>
  );
};
