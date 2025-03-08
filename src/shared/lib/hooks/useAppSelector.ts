import { RootState } from '@/shared/store/store';

import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
