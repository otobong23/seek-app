
type baseProps = {
   children: React.JSX.Element
}

type headerProps = {
   title: string
}

type interestProps = {
   gender: 'male' | 'female' | 'non-binary'
}

type useBiometricsProps = (activateDeviceFallback?: boolean) => readonly [boolean, () => Promise<void>]