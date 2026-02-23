import {
    bookAppointment,
    getAppointments,
    getBookedTimeSlots,
    getUserAppointments,
    updateAppointmentStatus,
} from '@/lib/actions/appointment';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export function useGetAppointments() {
    const result = useQuery({
        queryKey: ['getAppointments'],
        queryFn: getAppointments,
    });
    return result;
}

export function useGetBookedTimeSlots(doctorId: string, date: string) {
    const result = useQuery({
        queryKey: ['getBookedTimeSlots', doctorId, date],
        queryFn: () => getBookedTimeSlots(doctorId, date),
        enabled: !!doctorId && !!date,
    });
    return result;
}

export function useBookAppointment() {
    const queryClient = useQueryClient();

    const result = useMutation({
        mutationFn: bookAppointment,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getUserAppointments'] });
        },
        onError: (error) => console.error('Failed to book appoinment ', error),
    });
    return result;
}

export function useGetUserAppointments() {
    const result = useQuery({
        queryKey: ['getUserAppointments'],
        queryFn: getUserAppointments,
    });
    return result;
}

export function useUpdateAppointmentStatus() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateAppointmentStatus,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['getAppointments'] });
        },
        onError: (error) => console.error('Failed to update appointment:', error),
    });
}
