import { getSessionStorage } from '../utils/sessionStorage'
import api from './index'

interface ChildData {
    name: string
    gender: string
    grade: string
    date_of_birth: Date | null
    school_name: string
    school_id: string
    // parent_id: number;
    // approval_level_1: string;
    // approval_level_2: string;
}

interface ChildUpdateData {
    school_id: number
    grade: number
}

interface ChildRegistrationRequest {
    children: ChildData[]
}

interface ChildUpdateRequest {
    children: ChildUpdateData[]
}

class ChildRegistrationService {
    static async registerChildren(children: ChildData[]): Promise<void> {
        const payload: ChildRegistrationRequest = { children }
        const endpoint = `/child`
        try {
            const response = await api('post', endpoint, payload)
            return response.data.DATA
        } catch (error) {
            console.error('Error verifying OTP:', error)
            throw error
        }
    }

    static async aswesumaRegister(): Promise<void> {
        const payload = {
            nic: getSessionStorage('nic'),
            aswasuma_number: getSessionStorage('aswesume_hh_number'),
        }
        const endpoint = `/v2/parent/child`

        try {
            const response: any = await api('post', endpoint, payload)
            return response
        } catch (error) {
            console.error('Error registering child:', error)
            throw error
        }
    }

    static async aswesumaChildUpdate(children: ChildUpdateData[]): Promise<void> {
        const payload: ChildUpdateRequest = { children }
        const endpoint = `/child`

        try {
            const response: any = await api('patch', endpoint, payload)
            return response
        } catch (error) {
            console.error('Error registering child:', error)
            throw error
        }
    }
}

export default ChildRegistrationService
