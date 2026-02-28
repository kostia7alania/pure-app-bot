import { ERequest } from '../types'

const getLastActiveTab = () => chrome.tabs.query({ active: true, lastFocusedWindow: true })

export const getCurrentTabForBackground = async (): Promise<{ id: number }> => {
  const [tabs] = (await getLastActiveTab()) ?? { id: -3 }

  return tabs as { id: number }
}

export const getCurrentTab = () => {
  return chrome.runtime.sendMessage({ type: ERequest.GET_ACTIVE_TAB })
}
